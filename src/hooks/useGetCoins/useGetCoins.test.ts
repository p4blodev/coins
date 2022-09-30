import { renderHook, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../mocks/browser';
import { useGetCoins } from './useGetCoins';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('useGetCoins hook verification', () => {
  describe('when hook is init', () => {
    test('01 - should error to be null', () => {
      const { result } = renderHook(() => useGetCoins());

      expect(result.current.error).toBe('');
    });
    test('02 - should isLoading to be true', () => {
      const { result } = renderHook(() => useGetCoins());
      expect(result.current.isLoading).toBeTruthy();
    });
    test('03 - should data to be empty', () => {
      const { result } = renderHook(() => useGetCoins());

      expect(result.current.data).toHaveLength(0);
    });
  });
  describe('after hook was init', () => {
    test('01 - should has isLoanding true -> isLoanding false -> data.length > 5', async () => {
      const { result } = renderHook(() => useGetCoins());

      expect(result.current.isLoading).toBeTruthy();

      await waitFor(() => {
        expect(result.current.isLoading).toBeFalsy();
      });

      await waitFor(() => {
        expect(result.current.data).toHaveLength(5);
      });
    });
  });
  describe('hook error', () => {
    const API_BASE = 'https://api.coingecko.com/api/v3/coins';
    const url = `${API_BASE}/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1`;
    const FAILED_REQUEST = rest.get(url, (_req, res, ctx) => {
      return res(ctx.status(404), ctx.json('MOCK_ERROR'));
    });
    test('01 - should has isLoanding true -> isLoanding false -> data.length > 5', async () => {
      server.use(FAILED_REQUEST);
      const { result } = renderHook(() => useGetCoins());

      expect(result.current.isLoading).toBeTruthy();

      await waitFor(() => {
        expect(result.current.isLoading).toBeFalsy();
      });
      console.log('PABLO -> RESULT: ', result);
      await waitFor(() => {
        expect(result.current.error).toBe('something went wrong');
      });
    });
  });
});
