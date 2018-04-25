import java.util.*;

public class Main {
  
  public static void main(String[] args) {
    ArrayList<String> permutations = new ArrayList<String>();
    findPermutation("", "man", permutations);
    System.out.println(permutations);
  }

  public static void findPermutation(String prefix, String suffix, ArrayList<String> arr) {
    int n = suffix.length();
    if (n == 0) {
      if (!arr.contains(new String(prefix))) {
        arr.add(prefix);
      }
    } else {
      for (int i = 0; i < n; i++) {
        findPermutation(prefix + suffix.charAt(i), suffix.substring(0, i) + suffix.substring(i + 1, n), arr);
      }
    }
  }
}