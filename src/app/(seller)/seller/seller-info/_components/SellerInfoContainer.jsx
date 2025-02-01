"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// interface SellerInfo {
//   firstName: string
//   lastName: string
//   email: string
//   phone: string
//   address: string
//   city: string
//   country: string
//   postalCode: string
//   businessName: string
//   businessType: string
//   taxId: string
//   bio: string
//   profilePicture: string
// }

const initialSellerInfo /*: SellerInfo */ = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main St",
  city: "Anytown",
  country: "USA",
  postalCode: "12345",
  businessName: "John's Emporium",
  businessType: "Sole Proprietorship",
  taxId: "123-45-6789",
  bio: "Passionate about delivering quality products to my customers.",
  profilePicture: "/placeholder.svg?height=200&width=200",
}

const SellerInfoContainer = () => {
  const [sellerInfo, setSellerInfo] = useState /* <SellerInfo> */(initialSellerInfo)

  const handleInputChange = (e /*: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> */) => {
    const { name, value } = e.target
    setSellerInfo((prev) => ({ ...prev, [name] : value }))
  }

  const handleSelectChange = (name /*: string */, value /*: string */) => {
    setSellerInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleProfilePictureChange = (e   /*: React.ChangeEvent<HTMLInputElement> */) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setSellerInfo((prev) => ({ ...prev, profilePicture: imageUrl }))
    }
  }

  const handleSubmit = (e /*: React.FormEvent */) => {
    e.preventDefault()
    console.log("Updated Seller Info:", sellerInfo)
    // Here you would typically send the updated info to your backend
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Seller Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label  htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" value={sellerInfo.firstName} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={sellerInfo.lastName} onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={sellerInfo.email} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" value={sellerInfo.phone} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" name="address" value={sellerInfo.address} onChange={handleInputChange} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" value={sellerInfo.city} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" name="country" value={sellerInfo.country} onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input id="postalCode" name="postalCode" value={sellerInfo.postalCode} onChange={handleInputChange} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="relative w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src={"https://static.vecteezy.com/system/resources/previews/050/907/533/large_2x/3d-cartoon-man-wearing-red-t-shirt-with-arms-crossed-png.png"}
                  alt="Profile Picture"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Label htmlFor="profilePicture" className="cursor-pointer">
                <div className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-md border-2 border-primary">
                  <Camera className="w-4 h-4" />
                  <span>Change Picture</span>
                </div>
                <Input
                  id="profilePicture"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfilePictureChange}
                />
              </Label>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={sellerInfo.businessName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select
                    value={sellerInfo.businessType}
                    onValueChange={(value) => handleSelectChange("businessType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Sole Proprietorship">Sole Proprietorship</SelectItem>
                      <SelectItem value="Partnership">Partnership</SelectItem>
                      <SelectItem value="Corporation">Corporation</SelectItem>
                      <SelectItem value="LLC">LLC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="taxId">Tax ID</Label>
                <Input id="taxId" name="taxId" value={sellerInfo.taxId} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" name="bio" value={sellerInfo.bio} onChange={handleInputChange} rows={4} />
              </div>
            </CardContent>
          </Card>
        </div>

        <CardFooter className="flex justify-end mt-6">
          <Button type="submit" className="bg-f-primary-1-300 text-white font-bold hover:bg-purple-700 ">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </CardFooter>
      </form>
    </div>
  )
}

export default SellerInfoContainer ; 