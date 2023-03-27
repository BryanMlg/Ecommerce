import React from 'react';
import '@style/OrderItem.scss';

export default function OrderItem ()  {
	return (
		<div className="MyOrderContent">
          <div className="Shopping">
            <figure>
              <img
                src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Pc-Desktop"
              />
            </figure>
            <p>Pc-Desktop</p>
            <p>8,000.00 Q</p>
          </div>
        </div>
      
	);
}