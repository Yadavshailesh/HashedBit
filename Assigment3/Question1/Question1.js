
const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

const filterBtn = document.getElementById('filter-btn');
const resultParagraph = document.getElementById('result');

filterBtn.addEventListener('click', () => {
    const updatedStates = states.filter(state => {
        const firstChar = state.charAt(0).toLowerCase();
        return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
    });
    resultParagraph.innerText = `Filtered States: ${updatedStates.join(', ')}`;
});