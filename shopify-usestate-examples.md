# Shopify Theme useState Examples

This document lists practical React useState examples specifically tailored for Shopify theme development. Each example demonstrates real-world functionality commonly needed in e-commerce stores.

## Product & Cart Examples

### 1. Product Quantity Selector
- **State**: `quantity` (number)
- **Functionality**: Increment/decrement product quantity with + and - buttons
- **Use Case**: Product pages, cart items
- **Key Features**: Min/max validation, disabled states

### 2. Add to Cart Button States
- **State**: `addToCartState` (idle, loading, success, error)
- **Functionality**: Show different button states during cart operations
- **Use Case**: Product pages, quick shop
- **Key Features**: Loading spinner, success checkmark, error handling

### 3. Cart Item Counter
- **State**: `cartCount` (number)
- **Functionality**: Display and update total items in cart
- **Use Case**: Header cart icon, mini cart
- **Key Features**: Animated counter, badge display

### 4. Product Variant Selector
- **State**: `selectedVariant` (object)
- **Functionality**: Switch between product options (size, color, material)
- **Use Case**: Product pages with variants
- **Key Features**: Price updates, availability checks, image changes

### 5. Wishlist Toggle
- **State**: `isWishlisted` (boolean)
- **Functionality**: Add/remove products from wishlist
- **Use Case**: Product cards, product pages
- **Key Features**: Heart icon animation, local storage persistence

## UI/UX Examples

### 6. Mobile Menu Toggle
- **State**: `isMobileMenuOpen` (boolean)
- **Functionality**: Open/close hamburger navigation menu
- **Use Case**: Mobile navigation
- **Key Features**: Smooth transitions, body scroll lock

### 7. Search Bar with Live Results
- **State**: `searchQuery`, `searchResults`, `isSearching`
- **Functionality**: Show/hide search suggestions as user types
- **Use Case**: Header search, search pages
- **Key Features**: Debounced search, keyboard navigation

### 8. Product Image Gallery
- **State**: `selectedImageIndex` (number)
- **Functionality**: Switch between different product images
- **Use Case**: Product pages
- **Key Features**: Thumbnail navigation, zoom functionality

### 9. Accordion FAQ Section
- **State**: `openAccordionIndex` (number or null)
- **Functionality**: Expand/collapse FAQ items
- **Use Case**: Product pages, help sections
- **Key Features**: Single/multiple open items, smooth animations

### 10. Newsletter Signup Form
- **State**: `email`, `isSubmitting`, `submitStatus`
- **Functionality**: Handle form submission and validation
- **Use Case**: Footer, popup modals
- **Key Features**: Email validation, success/error messages

## Shopping Experience

### 11. Product Filter Sidebar
- **State**: `isFilterOpen` (boolean)
- **Functionality**: Toggle visibility of filter options
- **Use Case**: Collection pages, search results
- **Key Features**: Mobile-friendly drawer, filter counts

### 12. Size Guide Modal
- **State**: `isSizeGuideOpen` (boolean)
- **Functionality**: Open/close size chart popup
- **Use Case**: Product pages with clothing/shoes
- **Key Features**: Modal overlay, responsive design

### 13. Product Quick View
- **State**: `quickViewProduct`, `isQuickViewOpen`
- **Functionality**: Show product details without page redirect
- **Use Case**: Collection pages, search results
- **Key Features**: Modal with product info, add to cart

### 14. Shipping Calculator
- **State**: `postalCode`, `shippingRates`, `isCalculating`
- **Functionality**: Calculate and display shipping costs
- **Use Case**: Cart page, product pages
- **Key Features**: Postal code validation, multiple shipping options

### 15. Promo Code Input
- **State**: `promoCode`, `isApplying`, `promoStatus`
- **Functionality**: Apply discount codes to cart
- **Use Case**: Cart page, checkout
- **Key Features**: Code validation, discount display

## Theme Customization

### 16. Theme Color Switcher
- **State**: `currentTheme` (light/dark)
- **Functionality**: Toggle between color themes
- **Use Case**: User preference settings
- **Key Features**: Persistent theme selection, smooth transitions

### 17. Currency Selector
- **State**: `selectedCurrency` (string)
- **Functionality**: Switch between different currencies
- **Use Case**: Header, footer
- **Key Features**: Price conversion, currency symbols

### 18. Language Selector
- **State**: `selectedLanguage` (string)
- **Functionality**: Toggle language options
- **Use Case**: Multi-language stores
- **Key Features**: Flag icons, language persistence

### 19. Product Comparison
- **State**: `comparisonProducts` (array)
- **Functionality**: Add/remove products from comparison
- **Use Case**: Collection pages, product pages
- **Key Features**: Comparison table, maximum limit

### 20. Recently Viewed Products
- **State**: `recentlyViewed` (array)
- **Functionality**: Track and display recently viewed items
- **Use Case**: Product pages, sidebar widgets
- **Key Features**: Local storage, product thumbnails

## Implementation Notes

### Common Patterns
- **Boolean States**: For toggles, modals, and visibility
- **String/Number States**: For selections, quantities, and input values
- **Object States**: For complex data like selected variants
- **Array States**: For lists, filters, and collections

### Best Practices
- Use meaningful state names
- Initialize with appropriate default values
- Handle edge cases (empty states, loading states)
- Consider performance implications
- Implement proper error handling

### Shopify-Specific Considerations
- Integrate with Shopify's Cart API
- Handle Shopify's product variant structure
- Consider Shopify's theme settings
- Ensure compatibility with Shopify's checkout process
- Follow Shopify's accessibility guidelines

## Getting Started
Choose any example from the list above and implement it step by step. Each example can be built independently and then integrated into your Shopify theme components.
