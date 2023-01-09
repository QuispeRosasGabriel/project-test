import { render, screen } from '@testing-library/react'
import Filters from '../components/Filters'

describe('Filters', () => {
  it('renders the filters section', () => {
    render(<Filters />)
    const upButton = screen.getByTestId("up");
    const downButton = screen.getByTestId("down");
    expect(upButton).toBeInTheDocument();
    expect(downButton).toBeInTheDocument();
  })
})