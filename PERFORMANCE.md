# Performance
All performance measured with network throttling set to DSL (2 Mb/s 5ms RTT)

## Week 1

### Initial performance
- DOMContentLoaded at 3.11s
- First paint at 10.10s
- Load event at 30.87s

### Optimize HTML/CSS (semantics, selectors etc.)
- DOMContentLoaded at 3.05s
- First paint at 3.11s
- Load event at 31.04s

### Optimize images
- DOMContentLoaded at 3.04s
- First paint at 3.10s
- Load event at 23.77s

### Optimize JavaScript
- DOMContentLoaded at 1.12s
- First paint at 252ms
- Load event at 29.46s

### SVG icons
- DOMContentLoaded at 3.23s
- First paint at 3.27s
- Load event at 31.01s

### Combined performance
- DOMContentLoaded at 3.09s
- First paint at 210ms
- Load event at 22.47s

## Week 2

### Initial performance (from last week)
- DOMContentLoaded at 3.09s
- First paint at 210ms
- Load event at 22.47s

### Service worker
- DOMContentLoaded at 353ms
- First paint at 561ms
- Load event at 849ms

## Week 3

### Service worker
- DOMContentLoaded at 353ms
- First paint at 561ms
- Load event at 849ms

### HTTP Requests
- DOMContentLoaded at 267ms
- First paint at 367ms
- Load event at 843ms

### Optimize images
_no meaningful difference_

- DOMContentLoaded at 267ms
- First paint at 367ms
- Load event at 843ms

- Total size: 5.4MB
- Number of requests: 335

### Fonts

- DOMContentLoaded at 284ms
- First paint at 384ms
- Load event at 726ms

- Total size: 5.4MB
- Number of requests: 334







