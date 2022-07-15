        const frameObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.src = 'YOUR_LINK';
                    observer.unobserve(entry.target)
                } 
            })
        })
        const frame = document.querySelector('YOUR_SELECTOR')
        frameObserver.observe(frame)
