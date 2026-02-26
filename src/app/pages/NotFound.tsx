import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="max-w-md text-center">
        <CardHeader>
          <CardTitle>404 - Page Not Found</CardTitle>
          <CardDescription>
            Oops! The page you are looking for does not exist.
          </CardDescription>
        </CardHeader>
        <div className="p-6">
          <Button
            variant="default"
            onClick={() => navigate("/")}
          >
            Go Back Home
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;