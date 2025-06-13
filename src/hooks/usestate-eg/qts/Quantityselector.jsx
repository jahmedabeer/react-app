import { useState } from 'react';
import './Quantityselector.css';

const Quantityselector = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if (quantity <= 1) return
        setQuantity(quantity - 1)
    }

    return (
        <div className="demo-container">
            <div className="component-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-icon">
                    <path d="M3 3H5L5.4 5M7 13H17L21 5H6M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13M9 7H15M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className="component-title">Product Quantity Selector</h2>
            </div>
            <div className="quantity-selector">
                <div className="quantity-controls">
                    <button
                        className="quantity-btn quantity-btn--minus"
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={decreaseQuantity}
                    >
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>

                    <input
                        type="number"
                        className="quantity-input"
                        min="1"
                        readOnly
                        aria-label="Product quantity"
                        value={quantity}
                    />
                    <button
                        className="quantity-btn quantity-btn--plus"
                        type="button"
                        aria-label="Increase quantity"
                        onClick={increaseQuantity}
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quantityselector;