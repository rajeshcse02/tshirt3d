import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#042454',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './rock.png',
  fullDecal: './tshirt.png',
});

export default state;