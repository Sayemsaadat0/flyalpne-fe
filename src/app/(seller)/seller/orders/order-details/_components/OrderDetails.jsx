import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../../../components/ui/table';
import { Badge } from '@/components/ui/badge';

// interface OrderDetailsProps {
//   orderId: string
//   customer: {
//     name: string
//     address: string
//     city: string
//     phone: string
//   }
//   shippedTo: {
//     name: string
//     address: string
//     phone: string
//   }
//   payment: {
//     cardNumber: string
//     email: string
//   }
//   orderDate: string
//   products: Array<{
//     id: number
//     image: string
//     name: string
//     description: string
//     price: number
//     quantity: number
//   }>
//   paymentStatus: "PAID" | "PENDING" | "FAILED"
// }

export default function OrderDetails({
  orderId = '#1082',
  customer = {
    name: 'Twitter, Inc.',
    address: '795 Folsom Ave, Suite 600',
    city: 'San Francisco, CA 94107',
    phone: '(123) 456-7890',
  },
  shippedTo = {
    name: 'Elaine Hernandez',
    address: 'P. Sherman 42, Wallaby Way, Sidney',
    phone: '(123) 345-6789',
  },
  payment = {
    cardNumber: '**** 1234',
    email: 'h.elaine@gmail.com',
  },
  orderDate = '4:34PM, Wed, Aug 13, 2020',
  products = [
    {
      id: 1,
      image: '/assets/img/products/p2.jpg',
      name: 'Baby Pink Shoes',
      description: 'a vary smooth and comfert Shoes ever for baby.',
      price: 75,
      quantity: 15,
    },
    {
      id: 2,
      image: '/assets/img/products/p5.jpg',
      name: 'Tee-Shirt For Men',
      description: 'Classie and full slive tee-shirt for boy or man.',
      price: 75,
      quantity: 15,
    },
    {
      id: 3,
      image: '/assets/img/products/p11.jpg',
      name: 'Round Cap',
      description: 'Comfertable round cut cap for both.',
      price: 75,
      quantity: 2,
    },
  ],
  paymentStatus = 'PAID',
}) {
  const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold">Order Detail</h1>
        <p className="text-muted-foreground">Order ID: {orderId}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="overflow-hidden border-gray-700">
          <CardHeader className="bg-gray-700 text-white mb-5">
            <CardTitle className="text-sm">Customer:</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <p>{customer.name}</p>
            <p className="text-muted-foreground">{customer.address}</p>
            <p className="text-muted-foreground">{customer.city}</p>
            <p className="text-muted-foreground">P: {customer.phone}</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-gray-700">
          <CardHeader className="bg-blue-100 mb-5">
            <CardTitle className="text-sm">Shipped To:</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <p>{shippedTo.name}</p>
            <p className="text-muted-foreground">{shippedTo.address}</p>
            <p className="text-muted-foreground">P: {shippedTo.phone}</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-gray-700">
          <CardHeader className="bg-green-100 mb-5">
            <CardTitle className="text-sm">Payment Method:</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <p>Visa ending {payment.cardNumber}</p>
            <p className="text-muted-foreground">{payment.email}</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-gray-700">
          <CardHeader className="bg-red-100 mb-5">
            <CardTitle className="text-sm">Order Date:</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p>{orderDate}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="overflow-hidden border-gray-700">
        <CardHeader className="bg-gray-100 mb-5">
          <CardTitle>PRODUCT SUMMARY</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead className="w-24">IMAGE</TableHead>
                <TableHead>PRODUCT</TableHead>
                <TableHead className="text-right">PRICE/UNIT</TableHead>
                <TableHead className="text-right">QUANTITY</TableHead>
                <TableHead className="text-right">SUBTOTAL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <Image
                      src={product.image || '/placeholder.svg'}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="rounded-lg object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">${product.price}</TableCell>
                  <TableCell className="text-right">{product.quantity}</TableCell>
                  <TableCell className="text-right">${product.price * product.quantity}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={4} />
                <TableCell className="text-right font-medium">Taxes</TableCell>
                <TableCell className="text-right">N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4} />
                <TableCell className="text-right font-medium">Total</TableCell>
                <TableCell className="text-right font-medium">${total.toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex justify-end mt-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Payment Status:</span>
              <Badge variant={paymentStatus === 'PAID' ? 'default' : 'destructive'}>
                {paymentStatus}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
