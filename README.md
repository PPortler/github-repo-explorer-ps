# GitHub Repo Explorer

โปรเจกต์สำหรับค้นหาและดูรายละเอียด GitHub Repository โดยใช้ GitHub API

## 1) วิธีรันโปรเจกต์

### คุณสมบัติที่ต้องมี
- Node.js (แนะนำเวอร์ชันใหม่ เช่น 20+)
- npm

### ขั้นตอนรัน

1. ติดตั้ง dependencies

```bash
npm install
```

2. รันโหมดพัฒนา

```bash
npm run dev
```

3. เปิดเบราว์เซอร์ที่

```text
http://localhost:3000
```

### คำสั่งที่ใช้บ่อย

```bash
npm run dev     # run development server
npm run build   # build production
npm run start   # start production server
npm run lint    # run eslint
```

## 2) การตัดสินใจเลือกใช้เครื่องมือ/โครงสร้างโค้ด

### เครื่องมือหลัก
- Next.js (App Router): ใช้สำหรับโครงสร้างหน้า, routing, และ server/client component
- TypeScript: ช่วยให้โค้ดปลอดภัยขึ้นจาก type checking
- Tailwind CSS v4: จัดการ UI ได้เร็วและคงรูปแบบได้ง่าย

### แนวคิดโครงสร้างโค้ด
- `app/`: จัดการ route และ layout ของแอป
- `components/`: เก็บ UI components ที่นำกลับมาใช้ซ้ำ
- `hooks/`: แยก logic state/data fetching (เช่น `useRepositories`)
- `services/`: แยกงานเรียก API ไปอีกชั้น (`githubApi.ts`)
- `consts/`: รวมค่าคงที่ที่ใช้ร่วมกัน (เช่น enum สถานะ)
- `types/`: รวม type/interface ของข้อมูล

### เหตุผลที่แยกแบบนี้
- แก้ไขง่าย: เปลี่ยน UI ไม่กระทบ logic และกลับกัน
- ใช้ซ้ำได้: component/hook/service นำไปใช้จุดอื่นได้ทันที
- ดูแลง่ายขึ้นเมื่อโปรเจกต์โต: รู้ชัดว่าโค้ดแต่ละแบบอยู่ตรงไหน

## 3) สิ่งที่อยากปรับปรุงหากมีเวลาเพิ่ม

1. เพิ่ม Skeleton ตอนโหลดข้อมูล
- ทำกล่องหลอก (skeleton card) แทนการแสดงหน้าว่าง
- ทำให้ผู้ใช้รู้ว่าระบบกำลังโหลดอยู่

2. ปรับหน้าตาให้สวยและอ่านง่ายขึ้น
- ปรับ spacing ให้สม่ำเสมอทั้งหน้า
- ปรับสี, ขนาดตัวอักษร, และปุ่มให้คุมโทนเดียวกัน

3. ทำ Responsive ให้ครบมือถือถึงเดสก์ท็อป
- ปรับ layout ให้แสดงผลดีในจอเล็ก
- ตรวจหน้า list และหน้า detail ให้ไม่ล้นจอ

4. ปรับสถานะ Empty/Error ให้น่าใช้งานขึ้น
- เพิ่มข้อความแนะนำการใช้งานที่ชัดขึ้น
- เพิ่มปุ่มกลับหน้าหลักหรือปุ่มลองค้นหาใหม่

5. เก็บรายละเอียด UX เล็กๆ ที่ทำได้เร็ว
- เพิ่ม hover/focus state ให้ปุ่มและการ์ด
- เพิ่ม animation เบาๆ ให้หน้าโหลดและการเปลี่ยนหน้า

---

