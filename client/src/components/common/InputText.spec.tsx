import { render, screen } from '@testing-library/react'
import { BookStoreThemeProvider } from '../../context/themeContext'
import { InputText } from './InputText'
import React from 'react'

describe('InputText 컴포넌트', () => {
  describe('InputText placeholder에 default가 지정되면', () => {
    it('값을 확인한다.', () => {
      render(
        <BookStoreThemeProvider>
          <InputText placeholder='여기에 입력하세요'/>
        </BookStoreThemeProvider>
      )
      
      expect(screen.getByPlaceholderText('여기에 입력하세요')).toBeInTheDocument();
    })

    it('forwardRef에 HTMLInput 요소가 동작을 확인한다.', () => {
      const ref = React.createRef<HTMLInputElement>();
      
      render(
        <BookStoreThemeProvider>
          <InputText placeholder='여기에 입력하세요' ref={ref}/>
        </BookStoreThemeProvider>
      )
      
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })
  })
})
