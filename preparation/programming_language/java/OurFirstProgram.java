public class Entry<k, V> {
  private K key;
  private V value;

  public Entry (K key, V value) {
    this.key = key;
    this.value = value;
  }

  public k getKey() { return key; }
  public v getValue() { return value; }
}

