# Khi nào nên sử dụng MongoDB và Redis


## MongoDB
MongoDB là một hệ quản trị cơ sở dữ liệu NoSQL dựa trên tài liệu.
Nó thích hợp cho các ứng dụng có yêu cầu lưu trữ dữ liệu phức tạp, có cấu trúc thay đổi thường xuyên. 
MongoDB sử dụng JSON/BSON để lưu trữ dữ liệu, cho phép lưu trữ dữ liệu có cấu trúc linh hoạt.

## Redis
Redis là một hệ quản trị cơ sở dữ liệu in-memory, được sử dụng chủ yếu cho việc lưu trữ dữ liệu tạm thời trong bộ nhớ và làm cho các hoạt động truy vấn và xử lý nhanh chóng.
Redis hỗ trợ các kiểu dữ liệu khác nhau như strings, hashes, lists, sets và sorted sets.

## Sự khác nhau
Sự khác nhau chính giữa MongoDB và Redis là trong cách chúng lưu trữ dữ liệu và mục đích sử dụng chính.
MongoDB là một cơ sở dữ liệu lưu trữ tài liệu, trong khi Redis tập trung vào lưu trữ dữ liệu tạm thời trong bộ nhớ.
## Vậy khi nào nên sử dụng MongoDB và Redis
### Sử dụng MongoDB khi bạn cần lưu trữ dữ liệu phức tạp và cấu trúc thay đổi, và khi bạn cần khả năng mở rộng dễ dàng cho ứng dụng của mình.
    ``` shell
    - Dữ liệu của bạn có cấu trúc thay đổi hoặc không rõ ràng từ đầu.
    - Bạn cần khả năng mở rộng dễ dàng cho ứng dụng của mình.
    - Ứng dụng của bạn đòi hỏi truy vấn phức tạp và linh hoạt.
    - Bạn muốn lưu trữ các tài liệu phức tạp, bao gồm cả mảng và các trường lồng nhau.
    
    ```
### Sử dụng Redis khi bạn cần xử lý dữ liệu nhanh chóng, thường là dữ liệu tạm thời, hoặc khi bạn cần các tính năng caching và xử lý real-time.
    ```shell
    - Bạn cần xử lý dữ liệu nhanh chóng.
    - Bạn cần lưu trữ dữ liệu tạm thời.
    - Bạn cần tính năng caching.
    - Bạn cần xử lý real-time.
    - Bạn cần sử dụng Redis để quản lý dữ liệu phi tập trung và các tác vụ hàng đợi (queues).

    ```

## Tài liệu tham khảo
- https://aws.amazon.com/vi/compare/the-difference-between-redis-and-mongodb/#:~:text=%C4%90%E1%BB%83%20l%C6%B0u%20tr%E1%BB%AF%20d%E1%BB%AF%20li%E1%BB%87u,%C4%91%E1%BB%87m%20v%C3%A0%20l%C6%B0u%20tr%E1%BB%AF%20phi%C3%AAn.

- https://www.mongodb.com/compare/mongodb-vs-redis
