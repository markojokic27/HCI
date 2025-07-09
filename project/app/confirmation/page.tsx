// Components
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';

import Link from 'next/link';

export default function Page() {
  return (
      <Layout className="mb-52 mt-44">
        <LayoutRow>
          <LayoutColumn span={12} lgOffset={3} lgSpan={6}>
            <h1 className="mb-16 text-2xl font-black text-orange-800 lg:text-4xl md:mb-20 md:text-4xl">
              Thank you for your order!
            </h1>
            <p className="mb-6 text-md">
              Thank you for your purchase! We are pleased to confirm that your
              order has been successfully placed and will be processed shortly.
            </p>
            <p className="mb-16 text-md">
              We have sent you the receipt and order details via <b>e-mail</b>.
            </p>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow>
          <LayoutColumn span={12} lgOffset={3} lgSpan={2} className="mb-16">
            <p>Your order number is:</p>
            <b>100002</b>
          </LayoutColumn>
          <LayoutColumn span={12} lgOffset={2} lgSpan={2} className="mb-16">
            <p>Shipment expected:</p>
            <b>7 - 10 days</b>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className='text-grayscale-600'>
          <LayoutColumn span={12} lgOffset={3} lgSpan={3} className="mb-16">
            <p>Shipping address:</p>
            <p>Ante Antic</p>
            <p>Splitska 22, 10000 Zagreb, Croatia</p>
            <p>+385 XXX XXXX</p>
          </LayoutColumn>
          <LayoutColumn span={12} lgOffset={1} lgSpan={2} className="mb-16">
              <p>Payment:</p>
              <p>Ante Antic</p>
            <p>**** **** **** 1111</p>
            <p>Exp: 05/26</p>
          </LayoutColumn>
          <LayoutColumn span={12} lgOffset={3} lgSpan={6}>
            <Link href={'/'} className='rounded-xl border border-yellow-800 hover:border-orange-800 outline-none focus:outline-none text-orange-800 bg-yellow-800 drop-shadow-xl hover:scale-[0.98] font-semibold hover:drop-shadow-none hover:bg-yellow-800 active:scale-[0.96] px-6 py-4 text-base leading-none block w-full text-center'>Go back to home page</Link>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
  );
}