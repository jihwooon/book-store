import { render, screen } from '@testing-library/react'
import Title from './Title'
import { BookStoreThemeProvider } from '../../context/themeContext'

describe('Title', () => {
  describe('화면에 값이 존재하면', () => {
    it('렌더한다.', () => {
        render(
            <BookStoreThemeProvider>
                <Title size='large'>제목</Title>
            </BookStoreThemeProvider>
        )
        
        expect(screen.getByText('제목')).toBeInTheDocument();
    })

    it('size pros 적용', () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Title size='large'>제목</Title>
            </BookStoreThemeProvider>
        )

        expect(container?.firstChild).toHaveStyle({ fontSize: '2rem'})
    })

    it('color pros 적용', () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Title size='large' color='primary'>제목</Title>
            </BookStoreThemeProvider>
        )

        expect(container?.firstChild).toHaveStyle({ color: 'brown'})
    })
  })
})
