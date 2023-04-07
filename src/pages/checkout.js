import React from 'react';
import OrderItem from '@components/OrderItem.jsx';
import Style from '@style/CheckOut.module.scss';

export default function Checkout ()  {
	return (
		<div className={Style.Checkout}>
			<div className={Style["Checkout-container"]}>
				<h1 className={Style.title}>My order</h1>
				<div className={Style["Checkout-content"]}>
					<div className={Style.order}>
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
					</div>
					<OrderItem />
				</div>
			</div>
		</div>
	);
}