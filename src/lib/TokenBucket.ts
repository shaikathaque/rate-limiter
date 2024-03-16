export default class TokenBucket {
  private bucketSize: number;
  private tokens: number;
  private refillRate: number; // tokens per second
  private lastRefillTime: number; // timestamp in milliseconds

  constructor(bucketSize: number, refillRate: number) {
    this.bucketSize = bucketSize;
    this.tokens = bucketSize;
    this.refillRate = refillRate;
    this.lastRefillTime = Date.now();
  }

  private refill() {
    // determine how many tokens to add to the bucket
    const currentTime = Date.now();
    const timeSinceLastRefillMilliseconds = currentTime - this.lastRefillTime;
    const timeSinceLastRefilleconds = timeSinceLastRefillMilliseconds / 1000;

    const tokensToAdd = timeSinceLastRefilleconds * this.refillRate;

    // if current number of tokens + tokensToAdd is greater than bucket size, we should refill bucket to its limit
    // otherwise, add tokensToAdd
    if (this.tokens + tokensToAdd >= this.bucketSize) {
      this.tokens = this.bucketSize;
    } else {
      this.tokens = this.tokens + tokensToAdd
    }

    // update last refill time
    this.lastRefillTime = currentTime;
  }

  allowRequest() {
    // refill bucket based on time passed since last refill and update number of tokens
    this.refill(); 

    // allow request if tokens are available in bucket
    if (this.tokens > 0) {
      this.tokens -= 1;
      return true;
    }
    return false; // no tokens available
  }
}

