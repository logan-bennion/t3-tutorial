"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";



export function TopNav() {
    return (
      <nav className="flex w-full justify-between items-center border-b p-4 text-xl font-semibold">
        <div>Gallery</div>
  
        <div className="flex flex-row">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton 
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    alert("Upload Completed");
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
  }