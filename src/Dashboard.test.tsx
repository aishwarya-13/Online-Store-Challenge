import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import { Dashboard } from "./Dashboard"
import { TITLE_DISPLAY_MESSAGE1, TITLE_DISPLAY_MESSAGE2, TITLE_DISPLAY_MESSAGE3 } from "./constants/string"

const renderDashboard = ()=>{
    render(<Dashboard/>)
}

describe('Given the Dashboard component', ()=>{
    test('it displays the messages in detail panel', async ()=>{
        renderDashboard()

        expect(screen.getByText(TITLE_DISPLAY_MESSAGE1)).toBeInTheDocument()
        expect(screen.getByText(TITLE_DISPLAY_MESSAGE2)).toBeInTheDocument()
        expect(screen.getByText(TITLE_DISPLAY_MESSAGE3)).toBeInTheDocument()
    })
})