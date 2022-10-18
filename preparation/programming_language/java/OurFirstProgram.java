public class Entry {
  String contents = File.readString(Path.of("alice.txt"), StandardCharsets.UTF_8);
  List<String> words = List.of(contents.split("\\PL+"));
}


