import { describe } from 'node:test'
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HomeLayout } from "./components/HomeLayout"

describe("Render Page Component")
test('should render page component', () => {
  render(<HomeLayout />)

  expect(screen.getByText("  To get started, edit the page.tsx file.")).toBeInTheDocument()

})