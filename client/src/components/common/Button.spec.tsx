import { render, screen } from '@testing-library/react'
import { BookStoreThemeProvider } from '../../context/themeContext'
import Button from './Button'

describe('Button 컴포넌트', () => {
  describe('Button size가 large이고 scheme가 primary이면', () => {
    it('값을 확인한다.', () => {
      render(
        <BookStoreThemeProvider>
         <Button size='large' scheme='primary'>버튼</Button> 
        </BookStoreThemeProvider>
      );

      expect(screen.getByText('버튼')).toBeInTheDocument();
    })
    
    it ('fontSize 값을 출력한다.', () => {
        render(
          <BookStoreThemeProvider>
           <Button size='large' scheme='primary'>버튼</Button> 
          </BookStoreThemeProvider>
        );
  
        expect(screen.getByRole('button')).toHaveStyle({ fontSize: '1.5rem'})
    })

    it ('padding 값을 출력한다.', () => {
        render(
          <BookStoreThemeProvider>
           <Button size='large' scheme='primary'>버튼</Button> 
          </BookStoreThemeProvider>
        );
  
        expect(screen.getByRole('button')).toHaveStyle({ padding: '1rem 2rem'})
    })

    it ('color 값을 출력한다.', () => {
        render(
          <BookStoreThemeProvider>
           <Button size='large' scheme='primary'>버튼</Button> 
          </BookStoreThemeProvider>
        );
  
        expect(screen.getByRole('button')).toHaveStyle({ color: 'white'})
    })
  })
})
