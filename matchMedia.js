        const responsive = [
            "(max-width: 600px)",
            "(min-width: 1200px)",
        ]

        function useMatchMedia(queries) {
            const mediaQueryList = queries.map(q => window.matchMedia(q))

            function update() {
                let values = mediaQueryList.map(q => q.matches)

                mediaQueryList.forEach(item => item.addEventListener("change", () => {
                    values = mediaQueryList.map(q => q.matches)
                }))

                return values
            }

            return update
        }

        const updateValues = useMatchMedia(responsive)
        window.addEventListener('resize', () => {
            const [mobile, desktop] = updateValues()
            if (mobile) {
                device.textContent = "Mobile"
                device.style.color = "black"
                app.style.backgroundColor = "white"
            } else {
                device.textContent = "Desktop"
                device.style.color = "white"
                app.style.backgroundColor = "black"
            }
        })
