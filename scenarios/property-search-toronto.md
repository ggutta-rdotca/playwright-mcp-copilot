# 🏡 Realtor.ca Property Search – Toronto Listing Scenario

## ✅ Test Objective

To verify that searching for "Toronto" on [Realtor.ca](https://www.realtor.ca) displays at least one listing, and that the first listing card includes a relevant title.

---

## 🧪 Scenario: Search for Toronto and assert first listing

### 🔹 Precondition:
- User is on [https://www.realtor.ca](https://www.realtor.ca)
- Cookies prompt may be displayed

---

### 📋 Steps:

1. Navigate to `https://www.realtor.ca`.
2. If a cookie consent popup is shown:
   - Click the **"Accept"** button.
3. Locate the search input field (with ID: `#input-auto-complete`).
4. Enter **"Toronto"** into the search box.
5. Press **Enter** to initiate the search.
6. Wait for the results page to finish loading.
7. Identify the first property listing card on the page (with class: `.listingCard`).
8. Assert that:
   - At least one listing card is visible.
   - The title (`h2`) of the first listing contains **"Toronto"** or **"ON"**.

---

## 🧾 Expected Result

- The site should successfully navigate to the Toronto listings.
- The first visible listing card should contain a title that includes "Toronto" or "ON".

---