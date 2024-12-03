import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom'; 
import { CategoryProvider } from '../context/CategoryContext';
import { BrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify'; 

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

global.fetch = jest.fn() as jest.Mock; 

describe('Sidebar Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays a loading spinner while fetching categories', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => new Promise(() => {}));

    render(
      <BrowserRouter>
        <CategoryProvider>
          <Sidebar />
        </CategoryProvider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('shows an error toast if fetch fails', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch categories'));

    render(
      <BrowserRouter>
        <CategoryProvider>
          <Sidebar />
        </CategoryProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Failed to load categories. Please try again.');
    });
  });

  it('navigates to the correct category on button click', async () => {
    // Mock fetch response
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ['electronics', 'jewelery'],
    });

    render(
      <BrowserRouter>
        <CategoryProvider>
          <Sidebar />
        </CategoryProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Electronics')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Electronics'));

    expect(screen.getByText('Electronics')).toHaveClass('text-green-600 font-bold');
  });
});
