import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { fetchBooks } from "../api/books.api"
import { LIMIT } from "../components/constants/pagination"
import { QUERYSTRING } from "../components/constants/querystring"
import { Book } from "../models/book.model"
import { Pagination } from "../models/pagination.model"

export const useBooks = () => {
	const location = useLocation()

	const [books, setBooks] = useState<Book[]>([]);
	const [pagination, setPagination] = useState<Pagination>({
		totalCount: 0,
		currentPage: 1,
	})

	const [ isEmpty, setIsEmpry] = useState(true)

	useEffect(() => {
		const params = new URLSearchParams(location.search)

		fetchBooks({
			category_id: params.get(QUERYSTRING.CATEGORY_ID) ? Number(params.get(QUERYSTRING.CATEGORY_ID)) : undefined,
			news: params.get(QUERYSTRING.NEWS) ? true : undefined,
			currentPage: params.get(QUERYSTRING.PAGE) ? Number(params.get(QUERYSTRING.PAGE)) : 1,
			limit: LIMIT,
		}).then((res) => {
			setBooks(res.books);
			setPagination(res.pagination)
			setIsEmpry(res.books.length === 0)
		})
	}, [location.search])

	return { books, pagination, isEmpty }
}
