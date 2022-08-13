import SignIn from "../../components/SignIn/SignIn"
import { render, fireEvent, waitFor } from '@testing-library/react-native'

describe('SignIn Form', () => {
    it('onSubmit is called with right arguments', async () => {
        const onSubmit = jest.fn()
        const { getByPlaceholderText, getByText } = render(<SignIn onSubmit={onSubmit} />)
        fireEvent.changeText(getByPlaceholderText('Username'), 'test')
        fireEvent.changeText(getByPlaceholderText('Password'), 'testtest')
        fireEvent.press(getByText('Log in'))

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1)
            expect(onSubmit.mock.calls[0][0]).toEqual({
                username: 'test',
                password: 'testtest',
              })
        })
    })
})