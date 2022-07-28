- Code mới:
git checkout dev (sang nhánh dev)
git pull (kéo dev về Local)
git checkout -b feature/topic (tạo nhánh mới có code của pull dev và sang nhánh)
git add . (lưu code)
git commit -m "..." (tạo commit đẩy lên Git)
git push origin <your branch> (đẩy lên Git)


- Kiểm tra thay đổi và lưu lại ở Local:
git checkout dev
git pull
git checkout feature/topic (sang nhánh branch đã tồn tại)
git merge dev
git status

npm i (để install node_modules)
(yarn|npm run) start:dev chạy thử

git add .
git commit -m "resolve conflict dev"
git push


- Chưa muốn commit mà sang nhánh khác:
git stash (Lưu lại code vào Local)
git checkout <branch muốn sang>
git checkout <branch cũ chưa muốn commit>
git stash pop (lấy lại code đã lưu)


- Không tạo nhiều commit:
git add .
git commit --amend (Không tạo thêm commit -> Sửa tên commit hoặc để nguyên)
:wq (Lưu lại)
git push -f origin <tên branch>


- Lỡ commit -> Quay về trước khi commit:
git reset --hard <mã commit cũ>


- Đổi tên branch:
git checkout <oldname>
git branch -m <newname>
git push origin -u <newname>

- Xóa branch Local:
git branch -D <oldname>

- Xóa branch Git:
git push origin --delete <oldname>