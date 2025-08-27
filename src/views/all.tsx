import Images from './images';
import Track from './track';
import Card from './card';
import Parallax from './parallax';
// import Clamp from './clamp';
// import Split from './split';

export default function AllPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', width: '100%' }}>
      <Parallax />
      <Images />
      <Track />
      <Card />
      {/* <Split /> */}
      {/* <Clamp /> */}
    </div>
  );
}
