import TokenBucket from './TokenBucket';

describe('TokenBucket', () => {
  const bucketSize = 100;
  const refillRate = 10; // 10 tokens per second

  it('allows requests when initiated', () => {
    const bucket = new TokenBucket(bucketSize, refillRate);
    expect(bucket.allowRequest()).toBe(true);
    expect(bucket.tokens).toBe(bucketSize - 1);
  });

  it('it denies requests when no tokens are available', () => {
    const bucket = new TokenBucket(bucketSize, refillRate);

    // use up all tokens
    for (let i = 0; i <= bucketSize; i++) {
      bucket.allowRequest();
    }

    expect(bucket.allowRequest()).toBe(false);
  });
});
