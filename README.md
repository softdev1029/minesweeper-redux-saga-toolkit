# Description

The Minesweeper game connects to wss://hometask.eg1236.com/game1

```
help      - returns valid commands
new L     - starts new session, L=1|2|3|4
map       - returns the current map
open X Y  - opens cell at X,Y coordinates
```

![Peek 2022-03-16 15-13](https://user-images.githubusercontent.com/43288800/158598299-66faeb2c-145f-45cc-9913-9db1931888ea.gif)

# Result

- GitHub repo
- Netlify deployment

# Tech Stack

- React
- Material-ui, css-in-js
- TypeScript
- Redux + Redux-saga + Redux Toolkit
- feature-first approach - https://gist.github.com/arnausd23/137bab46215d69023729a1b30fb3ec9b
- Jest tests
- redux saga event channel - https://redux-saga.js.org/docs/advanced/Channels/
