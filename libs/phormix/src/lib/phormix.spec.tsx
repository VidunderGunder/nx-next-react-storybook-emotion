import { render } from '@testing-library/react';

import Phormix from './phormix';

describe('Phormix', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Phormix />);
    expect(baseElement).toBeTruthy();
  });
});
