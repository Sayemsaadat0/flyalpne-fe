import Image from "next/image"
import { Save, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

// interface InvoiceProps {
//   invoiceNumber: string
//   from: {
//     name: string
//     address: string
//     email: string
//     phone: string
//   }
//   to: {
//     name: string
//     address: string
//     email: string
//     phone: string
//   }
//   details: {
//     invoiceId: string
//     date: string
//     vat: string
//   }
//   items: Array<{
//     id: number
//     image: string
//     name: string
//     description: string
//     quantity: number
//     unitCost: number
//     total: number
//   }>
// }

export default function InvoiceContainer({
  invoiceNumber = "125",
  from = {
    name: "Ekka",
    address: "47 Elita Squre, VIP Chowk",
    email: "example@gmail.com",
    phone: "+91 5264 251 325",
  },
  to = {
    name: "John Marle",
    address: "58 Jamie Ways, North Faye, Q5 5ZP",
    email: "example@gmail.com",
    phone: "+91 5264 521 943",
  },
  details = {
    invoiceId: "#2365546",
    date: "March 25, 2018",
    vat: "PL654121545O",
  },
  items = [
    {
      id: 1,
      image:
        "/assets/img/products/p12.jpg",
      name: "Baby Pink Shoese",
      description: "Amazing shoes with 10 day's replacement warenty",
      quantity: 4,
      unitCost: 50.0,
      total: 200.0,
    },
    {
      id: 2,
      image:
        "/assets/img/products/p13.jpg",
      name: "Man T-Shirt with Cap Style",
      description: "Long Sleeve men T-shirt with cap in Dark Blue Color",
      quantity: 10,
      unitCost: 50.0,
      total: 500.0,
    },
    {
      id: 3,
      image:
        "/assets/img/products/p15.jpg",
      name: "Full Sleeve T-Shirt for men",
      description: "Amazing T-shirt in pure Cotton for both",
      quantity: 10,
      unitCost: 20.0,
      total: 200.0,
    },
    {
      id: 4,
      image:
        "/assets/img/products/p16.jpg",
      name: "Round Hat for Men",
      description: "Pure Leather Hat for men with black round tap",
      quantity: 6,
      unitCost: 50.0,
      total: 300.0,
    },
  ],
}) {
  const subtotal = items.reduce((sum, item) => sum + item.total, 0)
  const vat = subtotal * 0.1 // 10% VAT
  const total = subtotal + vat

  return (
    <Card className="max-w-5xl mx-auto">
      <CardContent className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Invoice #{invoiceNumber}</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-[#8BA4F9] text-white hover:bg-[#7B93E8]">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm" className="bg-[#8BA4F9] text-white hover:bg-[#7B93E8]">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-600">From</p>
            <p className="font-medium">{from.name}</p>
            <p className="text-sm text-gray-600">{from.address}</p>
            <p className="text-sm text-gray-600">Email: {from.email}</p>
            <p className="text-sm text-gray-600">Phone: {from.phone}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-600">To</p>
            <p className="font-medium">{to.name}</p>
            <p className="text-sm text-gray-600">{to.address}</p>
            <p className="text-sm text-gray-600">Email: {to.email}</p>
            <p className="text-sm text-gray-600">Phone: {to.phone}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-600">Details</p>
            <p className="text-sm text-gray-600">Invoice ID: {details.invoiceId}</p>
            <p className="text-sm text-gray-600">Date: {details.date}</p>
            <p className="text-sm text-gray-600">VAT: {details.vat}</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-14">#</TableHead>
                <TableHead className="w-14">Image</TableHead>
                <TableHead className="w-40">Item</TableHead>
                <TableHead className="max-w-md">Description</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Unit Cost</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-gray-600">{item.description}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">${item.unitCost.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${item.total.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex justify-between w-48">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between w-48">
            <span className="text-gray-600">Vat(10%)</span>
            <span className="font-medium">${vat.toFixed(2)}</span>
          </div>
          <div className="flex justify-between w-48 border-t pt-2">
            <span className="font-medium">Total</span>
            <span className="font-medium">${total.toFixed(2)}</span>
          </div>
          <Button className="mt-4 bg-[#8BA4F9] hover:bg-[#7B93E8]">Proceed to Payment</Button>
        </div>
      </CardContent>
    </Card>
  )
}

