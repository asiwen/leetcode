# leetcode
My leetcode assignments, records and remarks.


Tips:

* https://www.programiz.com/java-programming/examples/current-working-directory
* https://www.tutorialspoint.com/java8/java8_streams.htm java8 stream example
* https://www.geeksforgeeks.org/stream-in-java/ java stream abstract

map/reduce example:
* ['2018-01','2018-02',...'2018-12'] => (['2018','2018',...,'2018'], ['01','02',...,'12'])
* [1,2,3,4,5] => "'01','02','03',....,'12'"
* {'bytes':'column1','speed0':'column2', 'speed1':'column3'}  => "column1 as bytes, column2 as speed0, column3 as speed1"
* groupby, forEach
* 批量装载文件、读取内容、转换处理、输出
* IntStream.range(0, 10).forEach(System.out::println);  //basic stream api


java process/subprocess:
```java
  public static void main(String[] args) {
       ProcessBuilder procBuilder = new ProcessBuilder();
        procBuilder.command("python", "test.py")
                .inheritIO()
                .redirectErrorStream(true);

        try {
            Process process = procBuilder.start();
            InputStream stdout = process.getInputStream();
            byte[] buf = new byte[256];
            do {
                while (stdout.available() > 0 && stdout.read(buf) > 0) {
                    System.out.println(new String(buf, StandardCharsets.UTF_8));
                }
                System.out.println("wait subprocess response..");

            } while (!process.waitFor(3L, TimeUnit.SECONDS));

            while (stdout.available() > 0 && stdout.read(buf) > 0) {
                System.out.println(new String(buf, StandardCharsets.UTF_8));
            }

            System.out.println("process end");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
```
