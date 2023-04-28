## `commit` 信息
完整的 commit 信息包含头部信息及提交信息，其中头部信息为必填，在必要时（有较大的变动或其它需要备注的信息）选填提交信息。
头部信息需要包含两个部分``<type>: <description>``

* `type` 可以选用 `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
  * feat: 新功能(feature)
  * fix: 修复Bug
  * docs: 文档
  * style: 格式化代码(在不影响代码功能的前提)
  * refactor: 重构代码
  * test: 添加测试用例
  * chore: 构建过程或者辅助工具变动
* `description` 可以是任何文字，但不能包含空格
