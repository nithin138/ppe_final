import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../AppLayout"; // Outer layout for top-bottom
import SidebarLayout from "../SidebarLayout"; 
import DashboardLayout from "../DashboardLayout";
import Home from "../components/Home";
import PersonalInformation from "../components/PersonalInformation";
import BusinessService from "../components/BusinessService";
import Postings from "../components/Postings";
import Enquiry from "../components/Enquiry";
import Myorder from "../components/Myorder";
import ManageAddress from "../components/ManageAddress";
import FavoriteProducts from "../components/FavouriteProducts";
import CustomerSupport from "../components/CustomerSupport";
import AddService from "../components/AddService";
import AddProducts from "../components/AddProducts";
import Address from "../components/Address";
export default function AppRoutes() {
    return (
        <AppLayout>
            <Routes>
                <Route path="/" element={<SidebarLayout>< Home /></SidebarLayout> } />
                <Route path="/profile" element={<DashboardLayout><PersonalInformation /></DashboardLayout>} />
                <Route path="/profile/business-service" element={<DashboardLayout><BusinessService /></DashboardLayout>} />
                <Route path="/profile/business-service/add-service" element={<DashboardLayout><AddService /></DashboardLayout>} />
                <Route path="/profile/business-service/add-product" element={<DashboardLayout><AddProducts /></DashboardLayout>} />
                <Route path="/profile/postings" element={<DashboardLayout><Postings /></DashboardLayout>} />
                <Route path="/profile/enquiries" element={<DashboardLayout><Enquiry /></DashboardLayout>} />
                <Route path="/profile/manage-address" element={<DashboardLayout><ManageAddress /></DashboardLayout>} />
                <Route path="/profile/manage-address/add-address" element={<DashboardLayout><Address /></DashboardLayout>} />
                <Route path="/profile/my-orders" element={<DashboardLayout><Myorder /></DashboardLayout>} />
                <Route path="/profile/favorite-products" element={<DashboardLayout><FavoriteProducts /></DashboardLayout>} />
                <Route path="/profile/customer-support" element={<DashboardLayout><CustomerSupport /></DashboardLayout>} />
            </Routes>
        </AppLayout>
    );
}

