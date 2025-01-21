"use client"

import { useState } from "react"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, MoreHorizontal } from "lucide-react"
import { dummyProducts } from "@/data/seller.product.dummy.data"

// interface Product {
//   id: number
//   image: string
//   name: string
//   price: number
//   offer: string
//   purchased: number
//   stock: number
//   status: string
//   date: string
// }

export const ProductListContainer = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [entriesPerPage, setEntriesPerPage] = useState("20")
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState("asc") ; 
  const products = dummyProducts; 

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const SortIcon = ({ column }) => {
    if (sortColumn !== column) return null
    return sortDirection === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
            <SelectTrigger className="w-[80px]">
              <SelectValue>{entriesPerPage}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span>Entries</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Search:</span>
          <Input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Product</TableHead>
              <TableHead onClick={() => handleSort("name")} className="cursor-pointer">
                Name <SortIcon column="name" />
              </TableHead>
              <TableHead onClick={() => handleSort("price")} className="cursor-pointer">
                Price <SortIcon column="price" />
              </TableHead>
              <TableHead onClick={() => handleSort("offer")} className="cursor-pointer">
                Offer <SortIcon column="offer" />
              </TableHead>
              <TableHead onClick={() => handleSort("purchased")} className="cursor-pointer">
                Purchased <SortIcon column="purchased" />
              </TableHead>
              <TableHead onClick={() => handleSort("stock")} className="cursor-pointer">
                Stock <SortIcon column="stock" />
              </TableHead>
              <TableHead onClick={() => handleSort("status")} className="cursor-pointer">
                Status <SortIcon column="status" />
              </TableHead>
              <TableHead onClick={() => handleSort("date")} className="cursor-pointer">
                Date <SortIcon column="date" />
              </TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.offer}</TableCell>
                <TableCell>{product.purchased}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">{product.status}</span>
                </TableCell>
                <TableCell>{product.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <div className="p-2">
                        <Button variant="ghost" className="w-full justify-start">
                          Info
                        </Button>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>
          Showing 1 to {entriesPerPage} of {products.length} entries
        </div>
        <div className="flex gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline" className="bg-primary text-primary-foreground">
            1
          </Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  )
}

