
# Đôi 3 lời về Service Worker ☂︎

Lời mở đầu: không có lời mở đầu :v



## Khái quát đặc điểm của Service Worker
Service Worker là một loại công cụ trong các ứng dụng web tiến bộ, là một thành phần cực kỳ quan trọng trong công nghệ Progressive Web App (PWA). Cụ thể hơn, Service Worker là một tệp javascript với đặc điểm:
* **Service Worker chạy trong global context của chính nó:** Điều này có nghĩa rằng Service Worker hoạt động độc lập với trang web chính. Nó chạy ở một ngữ cảnh toàn cục (global context), tương tự như một luồng độc lập trong ứng dụng
* **Nó không thể gắn kết với 1 trang cụ thể:** Service Worker không gắn kết cố định với bất kỳ trang cụ thể nào, một Service Worker có thể phục vụ nhiều trang hoặc tất cả các trang trong một phạm vi (scope) cụ thể, nhưng nó không bị ràng buộc vào một trang duy nhất.
* **Không thể truy cập vào DOM:** Service Worker không có quyền truy cập trực tiếp vào DOM của trang web, thay vào đó nó giao tiếp với các page thông quả một giao diện đặc biệt (postMessage), và tương tác với DOM thông qua các page đó.
* **Nó không thể làm việc trên PORT 80!** Thì zị đó, nó chỉ làm việc trên giao thức HTTPS.

## Service Worker làm được chi?
* **Caching:** Service Worker có thể lưu trữ các tài nguyên của ứng dụng, như HTML, CSS, JavaScript, hình ảnh và dữ liệu trong bộ nhớ cache.
* **Intercepting và xử lý yêu cầu mạng (fetch events):** Service Worker có thể điều hướng và kiểm soát các yêu cầu mạng đến và đi từ máy chủ. Điều này cho phép bạn kiểm tra cache trước khi yêu cầu được gửi đến máy chủ và cung cấp tài nguyên từ cache khi chúng có sẵn, giúp tăng tốc độ tải trang web.
* **Push Notifications:** Service Worker cho phép ứng dụng web hiển thị thông báo đẩy (push notifications) cho người dùng, ngay cả khi bạn offline.
* **Background Sync:** Service Worker cho phép đồng bộ dữ liệu ở nền, ngay cả khi trang web không hoạt động. Điều này hữu ích để lưu trữ dữ liệu tạm thời và đồng bộ hóa nó với máy chủ khi có kết nối mạng.
* **Geofencing:** Service Worker có thể được sử dụng để theo dõi vị trí của người dùng và thực hiện các hành động dựa trên vị trí, chẳng hạn như hiển thị thông báo khi người dùng vào một khu vực cụ thể...

## Vòng đời
![lifecycle](https://nghia-sw.pages.dev/images/lifecycle.png)