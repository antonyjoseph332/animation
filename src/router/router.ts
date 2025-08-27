import { createBrowserRouter } from 'react-router';
import Layout from '../layout';
import Images from '../views/images';
import Card from '../views/card';
import Track from '../views/track';
import AllPage from '../views/all';
import Split from '../views/split';
import Clamp from '../views/clamp';

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path:'image', Component: Images },
      { path: 'card', Component: Card },
      { path: 'track', Component: Track },
      { index: true, Component: AllPage },
      { path: 'split', Component: Split },
      { path: 'clamp', Component: Clamp },
    ],
  },
]);

export default router;
