import { useState, useEffect } from "react";

const UseEffectHook = () => {
    const [discountCode, setDiscountCode] = useState("");
    const [appliedCode, setAppliedCode] = useState("");

    // Handle discount code input change
    const handleDiscountCodeChange = (e) => {
        setDiscountCode(e.target.value);
    };

    // Apply discount code
    const applyDiscountCode = () => {
        if (discountCode.trim() !== "") {
            setAppliedCode(discountCode);
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h3>Discount Code</h3>

            <div style={{ marginBottom: "15px" }}>
                <input
                    type="text"
                    value={discountCode}
                    onChange={handleDiscountCodeChange}
                    placeholder="Enter discount code (e.g. 10OFF)"
                    style={{ padding: "8px", marginRight: "10px" }}
                />
                <button
                    onClick={applyDiscountCode}
                    style={{ padding: "8px 16px" }}
                >
                    Apply Code
                </button>
            </div>

            {appliedCode && (
                <div style={{
                    padding: "10px",
                    backgroundColor: "#d4edda",
                    color: "#155724",
                    borderRadius: "4px"
                }}>
                    <strong>Applied Discount Code:</strong> {appliedCode}
                </div>
            )}
        </div>
    );
};

export default UseEffectHook;