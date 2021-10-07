import { PointManagement } from './PointManagement';

describe('add', () => {
  let pointManagement: PointManagement;
  let actual: number;

  beforeEach(() => {
    pointManagement = new PointManagement(100);
    actual = pointManagement.add(1);
  });

  afterEach(() => {
    pointManagement.clear();
  });

  it('add 1', () => {
    expect(actual).toBe(101);
  });
  it('total', () => {
    expect(pointManagement.total).toBe(101);
  });
});

describe('sub', () => {
  let pointManagement: PointManagement;
  let actual: number;

  beforeEach(() => {
    pointManagement = new PointManagement(100);
    actual = pointManagement.sub(1);
  });

  afterEach(() => {
    pointManagement.clear();
  });

  it('sub 1', () => {
    expect(actual).toBe(99);
  });
  it('total', () => {
    expect(pointManagement.total).toBe(99);
  });
});
