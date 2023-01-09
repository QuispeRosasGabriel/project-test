import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar';

describe('Navbar', () => {
    it('renders the navbar section', () => {
        render(<Navbar />)
        const buttonsContainer = screen.getByTestId("up-down-buttons-container");
        const searchInput = screen.getByTestId("search-input");
        expect(searchInput).toBeInTheDocument();
        expect(buttonsContainer).toBeInTheDocument();
      })
}) 