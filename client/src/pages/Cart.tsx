import { useState } from "react";
import CartItem from "src/components/cart/CartItem";
import Title from "src/components/common/Title";
import { useCart } from "src/hooks/useCart";
import styled from "styled-components";

const Cart = () => {
	const { carts, deleteCartItem } = useCart()
	const [checkedItems, setCheckedItems] = useState<number[]>([30])

	const handleCheckItem = (id: number) => {
		if (checkedItems.includes(id)) {
			setCheckedItems(checkedItems.filter((item) => item !== id));
		} else {
			setCheckedItems([
				...checkedItems,
				id
			])
		}
	}

	const handleItemDelete = (id: number) => {
		deleteCartItem(id)
	}

	return (
		<>
			<Title size="large">장바구니</Title>
			<CartStyle>
				<div className="content">
				{
					carts.map((item) => (
						<CartItem
						key={item.id}
						cart={item}
						checkedItems={checkedItems}
						onCheck={handleCheckItem}
						onDelete={handleItemDelete}
						/>
					))
				}
				</div>
			</CartStyle>
		</>
	);
}

const CartStyle = styled.div``;

export default Cart;
