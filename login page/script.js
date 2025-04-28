// const themes = [
//     {
//         background: "#1A1A2E",
//         color: "#FFFFFF",
//         primaryColor: "#0F3460"
//     },
//     {
//         background: "#461220",
//         color: "#FFFFFF",
//         primaryColor: "#E94560"
//     },
//     {
//         background: "#192A51",
//         color: "#FFFFFF",
//         primaryColor: "#967AA1"
//     },
//     {
//         background: "#F7B267",
//         color: "#000000",
//         primaryColor: "#F4845F"
//     },
//     {
//         background: "#F25F5C",
//         color: "#000000",
//         primaryColor: "#642B36"
//     },
//     {
//         background: "#231F20",
//         color: "#FFF",
//         primaryColor: "#BB4430"
//     }
// ];

// const setTheme = (theme) => {
//     const root = document.querySelector(":root");
//     root.style.setProperty("--background", theme.background);
//     root.style.setProperty("--color", theme.color);
//     root.style.setProperty("--primary-color", theme.primaryColor);
//     root.style.setProperty("--glass-color", theme.glassColor);
// };

// const displayThemeButtons = () => {
//     const btnContainer = document.querySelector(".theme-btn-container");
//     themes.forEach((theme) => {
//         const div = document.createElement("div");
//         div.className = "theme-btn";
//         div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
//         btnContainer.appendChild(div);
//         div.addEventListener("click", () => setTheme(theme));
//     });
// };

// displayThemeButtons();
// THEMES HANDLER (existing code)
const themes = [
    {
        background: "#1A1A2E",
        color: "#FFFFFF",
        primaryColor: "#0F3460"
    },
    {
        background: "#461220",
        color: "#FFFFFF",
        primaryColor: "#E94560"
    },
    {
        background: "#192A51",
        color: "#FFFFFF",
        primaryColor: "#967AA1"
    },
    {
        background: "#F7B267",
        color: "#000000",
        primaryColor: "#F4845F"
    },
    {
        background: "#F25F5C",
        color: "#000000",
        primaryColor: "#642B36"
    },
    {
        background: "#231F20",
        color: "#FFF",
        primaryColor: "#BB4430"
    }
];

const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
};

const displayThemeButtons = () => {
    const btnContainer = document.querySelector(".theme-btn-container");
    themes.forEach((theme) => {
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);
        div.addEventListener("click", () => setTheme(theme));
    });
};

displayThemeButtons();


// ✅ USER REGISTRATION LOGIC
document.addEventListener('DOMContentLoaded', () => {
    const registerLink = document.querySelector('a[href=""]');
    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            showRegisterForm();
        });
    }

    function showRegisterForm() {
        const container = document.querySelector('.form-container');
        container.innerHTML = `
            <h1 class="opacity">REGISTER</h1>
            <form id="registerForm">
                <input type="text" name="username" placeholder="USERNAME" required />
                <input type="password" name="password" placeholder="PASSWORD" required />
                <button type="submit" class="opacity">REGISTER</button>
            </form>
            <div class="register-forget opacity">
                <a href="#" id="loginLink">LOGIN</a>
            </div>
        `;

        document.getElementById('registerForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = e.target.username.value;
            const password = e.target.password.value;

            try {
                const res = await fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });

                const data = await res.json();
                alert(data.msg);
            } catch (err) {
                alert("Error registering user. Please try again.");
            }
        });

        document.getElementById('loginLink').addEventListener('click', (e) => {
            e.preventDefault();
            location.reload(); // go back to login form
        });
    }
});
