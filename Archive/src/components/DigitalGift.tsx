"use client";
import { QRCodeSVG } from "qrcode.react";
import { Copy, Gift } from "lucide-react";
import { wedding } from "@/lib/wedding";

export default function DigitalGift() {
  const hasPayment = Boolean(wedding.promptPayId);
  async function copyAccount() {
    if (!wedding.bankAccountNumber.startsWith("กรุณา")) {
      await navigator.clipboard.writeText(wedding.bankAccountNumber);
      alert("คัดลอกเลขบัญชีแล้ว");
    } else {
      alert("กรุณากำหนดเลขบัญชีจริงใน src/lib/wedding.ts ก่อน");
    }
  }

  return <div className="card mx-auto max-w-xl p-7 text-center">
    <Gift className="mx-auto text-[#c6a878]" size={28}/>
    <p className="eyebrow mt-3">Digital Gift</p>
    <h3 className="mt-2 font-display text-2xl text-[#789bc5]">Your kindness means the world</h3>
    <p className="mt-3 font-thai text-sm leading-7 text-[#79583f]">เพียงคุณมาร่วมเป็นส่วนหนึ่งในวันสำคัญของเรา ก็เป็นของขวัญที่มีค่ามากที่สุดแล้ว</p>

    <p className="mt-5 text-sm text-[#79583f]">หมายเลขพร้อมท์เพย์: {wedding.bankAccountName}</p>
    <p className="mt-1 font-display text-lg tracking-wider text-[#789bc5]">{wedding.bankAccountNumber}</p>
    <button onClick={copyAccount} className="btn-outline mt-4 inline-flex items-center gap-2"><Copy size={15}/> คัดลอกเลขบัญชี</button>
    <p className="mt-4 text-[11px] text-[#9a8b7e]">กรุณาตรวจสอบชื่อบัญชีและผู้รับก่อนทำรายการทุกครั้ง</p>

    
  </div>;
}
