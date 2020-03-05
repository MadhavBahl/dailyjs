# JS-Snippets Day 2: Digital Clock

Yesterday we discussed about a few get methods in the Date object.
Today, using them, let's build a Digital Clock 

## Code

```html
<body>
    <h1 id="time"></h1>
    <script>
        const timeEle = document.getElementById ('time');

        const updateTime = () => {
            const currentDate = new Date();

            const hour = currentDate.getHours();
            const mins = currentDate.getMinutes();
            const secs = currentDate.getSeconds();

            currentTime = `${hour} : ${mins} : ${secs}`;
            timeEle.innerHTML =  currentTime;
        }

        setInterval (() => {
            updateTime();
        }, 1000)
    </script>
</body>
```