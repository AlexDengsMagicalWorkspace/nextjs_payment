import type { NextApiRequest, NextApiResponse } from 'next';

// 定义 API 响应的数据类型
interface ApiResponse {
  message: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method === 'GET') {
    const { username, password } = req.query;

    if (!username || !password) {
      return res.status(400).json({ message: '缺少用户名或密码' });
    }

    if (username === 'admin' && password === 'password') {
      // 登录成功
      res.status(200).json({ message: '登录成功' });
    } else {
      // 登录失败
      res.status(401).json({ message: '用户名或密码错误' });
    }
  } else {
    // 处理其他方法
    res.status(405).json({ message: '方法不允许' });
  }
}
