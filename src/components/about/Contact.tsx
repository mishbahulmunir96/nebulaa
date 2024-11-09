import { Button } from "flowbite-react";
import FormContactGroup from "./element.tsx/FormContactGroup";
import MessageForm from "./element.tsx/MessageForm";
import Container from "../Container";
import Title from "../elements/Title";

const Contact = () => {
  return (
    <Container classParent="md:min-h-screen" classChildren="h-full mb-10">
      <Title>Hubungi Kami</Title>
      <div className="gap-4 lg:mb-0 lg:grid lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.366268257635!2d110.20649067371266!3d-6.966046493034506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705d006113b557%3A0x8d3c909837813cc7!2sNebula%20Craft%201(jual%20buket%20%26%20sewa%20box%20hantaran)!5e0!3m2!1sid!2sid!4v1731035863678!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }} // Menggunakan objek JavaScript di sini
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <form className="flex max-w-md flex-col gap-4">
            <FormContactGroup
              htmlFor="name"
              value="Nama"
              id="name"
              type="text"
              placeholder="Masukkan Nama Anda"
            />
            <FormContactGroup
              htmlFor="email"
              value="Email"
              id="email"
              type="email"
              placeholder="example@mail.com"
            />
            <FormContactGroup
              htmlFor="tel"
              value="Nomor Telepon"
              id="tel"
              type="tel"
              placeholder="081234567890"
            />
            <MessageForm />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
