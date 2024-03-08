import { useEffect, useState } from "react";
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { addCart } from "../api/cart.api";
import { BookDetail } from "../models/book.model";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";

export const useBook = (bookId: string | undefined) => {
	const [book, setBook] = useState<BookDetail | null>(null);
	const { isLoggedIn } = useAuthStore();
	const { showAlert } = useAlert();
	const [cartAdded, setCartAdded] = useState(false)

	const likeToggle = () => {
		if (!isLoggedIn) {
			showAlert('로그인이 필요합니다.')
			return;
		}

		if (!book) return;

		if (book.liked) {
			unlikeBook(book.id).then(() => {
				setBook({
					...book,
					liked: false,
					likes: book.likes - 1,
				})
			})
		} else {
			likeBook(book.id).then(() => {
				setBook({
					...book,
					liked: true,
					likes: book.likes + 1,
				})
			})
		}
	}

	const addToCart = (quantity: number) => {
		if (!book) return

		addCart({
			book_id: book.id,
			quantity: quantity
		}).then(() => {
			setCartAdded(true)
			setTimeout(() => {
				setCartAdded(false)
			}, 3000)
		})
	}

	useEffect(() => {
		if (!bookId) return;

		fetchBook(bookId).then((book) => {
			setBook(book)
		})
	}, [bookId])

	return { book, likeToggle, addToCart, cartAdded }
}
